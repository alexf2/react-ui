import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { ItemProps } from '#src/components/MenuItem';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { Menu, MenuDimensions as Dimension } from '#src/components/Menu';

export interface RenderContentProps {
  /** Ref на отрендеренный элемент */
  buttonRef: React.RefObject<HTMLButtonElement>;
  /** Обработчик нажатия клавиш */
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  /** Обработчик клика мыши */
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Иконка для отображения статуса меню */
  statusIcon: React.ReactNode;
  /** Состояние меню */
  menuState: boolean;
}

export interface DropMenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Состояние загрузки */
  loading?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected?: string;
  /** Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /**  */
  alignMenuRef?: React.RefObject<HTMLElement>;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Компонент, для которого необходимо Menu */
  renderContentProp: (options: RenderContentProps) => React.ReactNode;
}

export const DropMenu = React.forwardRef<HTMLButtonElement, DropMenuProps>(
  (
    {
      dimension = 'm',
      disabled = false,
      loading = false,
      alignSelf = 'flex-end',
      onClose,
      onOpen,
      items,
      selected,
      onChange,
      onClick,
      onKeyDown,
      alignMenuRef,
      children,
      renderContentProp,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const [active, setActive] = React.useState<string | undefined>();

    const reverseMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
      setMenuOpened((prevOpened) => {
        prevOpened ? onClose?.() : onOpen?.();
        return !prevOpened;
      });
      onClick?.(e);
    };
    const closeMenu = () => {
      setMenuOpened(false);
      onClose?.();
      btnRef.current?.focus();
    };

    const clickOutside = (e: Event) => {
      if (e.target && btnRef.current?.contains(e.target as Node)) {
        return;
      }
      setMenuOpened(false);
      onClose?.();
    };

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
      onKeyDown?.(e);
      switch (code) {
        case keyboardKey.Escape:
          if (menuOpened) closeMenu();
          break;
        case keyboardKey.Enter:
        case keyboardKey[' ']:
          if (!menuOpened) {
            e.stopPropagation();
            setMenuOpened(true);
            onOpen?.();
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    };

    const handleClick = (selected?: string) => {
      if (selected) {
        onChange?.(selected);
      }
      closeMenu();
    };

    React.useEffect(() => {
      if (menuOpened) {
        setActive(selected || items?.[0]?.id);
      }
    }, [menuOpened]);

    return (
      <>
        {renderContentProp({
          buttonRef: btnRef,
          handleKeyDown: handleBtnKeyDown,
          handleClick: reverseMenu,
          statusIcon: <OpenStatusButton $isOpen={menuOpened} aria-hidden />,
          menuState: menuOpened,
        })}
        {menuOpened && !loading && (
          <DropdownContainer
            role="listbox"
            alignSelf={alignSelf}
            targetRef={alignMenuRef || btnRef}
            onClickOutside={clickOutside}
          >
            <Menu
              model={items}
              selected={selected}
              onSelectItem={handleClick}
              dimension={dimension}
              active={active}
              onActivateItem={setActive}
            />
          </DropdownContainer>
        )}
      </>
    );
  },
);

DropMenu.displayName = 'DropMenu';
