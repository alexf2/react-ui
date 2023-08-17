import * as React from 'react';
import { uid } from '#src/components/common/uid';
import { LIGHT_THEME } from '#src/components/themes';
import { useTheme } from 'styled-components';
import type { AvatarProps } from '#src/components/Avatar';

type AvatarSVGProps = {
  dimension: AvatarProps['dimension'];
  size: string;
  hasImage?: boolean;
  href?: string;
  status?: AvatarProps['status'];
  appearance?: AvatarProps['appearance'];
  group?: boolean;
  svgMaskId?: string;
  withActivityRing?: boolean;
  showActivityRing?: boolean;
};

const IMAGE_SIZE = {
  xs: '24px',
  s: '32px',
  m: '40px',
  l: '48px',
  xl: '56px',
};

const VIEWBOX = {
  xs: '0 0 24 24',
  s: '0 0 32 32',
  m: '0 0 40 40',
  l: '0 0 48 48',
  xl: '0 0 56 56',
};

const ACTIVITY_VIEWBOX = {
  xs: '0 0 32 32',
  s: '0 0 40 40',
  m: '0 0 48 48',
  l: '0 0 56 56',
  xl: '0 0 64 64',
};

const ACTIVITY_RING = {
  xs: '15',
  s: '19',
  m: '23',
  l: '27',
  xl: '31',
};

const CIRCLE = {
  xs: '12',
  s: '16',
  m: '20',
  l: '24',
  xl: '28',
};

const ACTIVITY_CIRCLE = {
  xs: '16',
  s: '20',
  m: '24',
  l: '28',
  xl: '32',
};

const ELLIPSE = {
  xs: { c: '21', r: '3', r2: '5' },
  s: { c: '27', r: '5', r2: '7' },
  m: { c: '34', r: '6', r2: '8' },
  l: { c: '41', r: '7', r2: '9' },
  xl: { c: '47', r: '9', r2: '11' },
};

const ACTIVITY_ELLIPSE = {
  xs: { c: '25', r: '3', r2: '5' },
  s: { c: '31', r: '5', r2: '7' },
  m: { c: '38', r: '6', r2: '8' },
  l: { c: '45', r: '7', r2: '9' },
  xl: { c: '51', r: '9', r2: '11' },
};

export const AvatarSVG: React.FC<AvatarSVGProps> = ({
  dimension = 'xl',
  hasImage,
  href,
  status,
  size,
  appearance: appearanceProp,
  group = false,
  svgMaskId,
  withActivityRing = false,
  showActivityRing = false,
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const id = svgMaskId || uid();
  const useId = `url(#${id})`;
  const circleCenter = withActivityRing ? ACTIVITY_CIRCLE[dimension] : CIRCLE[dimension];
  const ellipseCenter = withActivityRing ? ACTIVITY_ELLIPSE[dimension].c : ELLIPSE[dimension].c;
  const imageCoordinate = withActivityRing ? '4px' : '0';

  const getBackgroundColor = (appearance: AvatarProps['appearance']) => {
    switch (appearance) {
      case 'neutral1':
      case 'white':
        return theme.color['Neutral/Neutral 00'];
      case 'neutral2':
      case 'light':
        return theme.color['Neutral/Neutral 10'];
      case 'neutral3':
      case 'grey':
        return theme.color['Neutral/Neutral 50'];
      case 'neutral4':
      case 'dark':
        return theme.color['Neutral/Neutral 80'];
      default:
        return appearance?.background || theme.color['Neutral/Neutral 10'];
    }
  };
  const getStatusColor = (status: AvatarProps['status']) => {
    switch (status) {
      case 'success':
        return theme.color['Success/Success 50 Main'];
      case 'warn':
        return theme.color['Attention/Attention 50 Main'];
      case 'danger':
        return theme.color['Error/Error 60 Main'];
      case 'inactive':
        return theme.color['Neutral/Neutral 50'];
      default:
        return status || theme.color['Neutral/Neutral 50'];
    }
  };
  const appearance = appearanceProp || 'light';
  const backgroundColor = typeof appearance === 'string' ? getBackgroundColor(appearance) : appearance.background;

  return (
    <svg
      viewBox={withActivityRing ? ACTIVITY_VIEWBOX[dimension] : VIEWBOX[dimension]}
      width={size}
      height={size}
      style={{ transform: 'rotate(.00001deg)' }} /* hack to force anti-aliasing in IE */
    >
      <defs>
        <mask id={id}>
          {withActivityRing && showActivityRing && (
            <circle
              id="ring"
              cx={circleCenter}
              cy={circleCenter}
              r={ACTIVITY_RING[dimension]}
              strokeWidth="2"
              stroke="white"
              fill="white"
            />
          )}
          <circle
            id="outer"
            cx={circleCenter}
            cy={circleCenter}
            r={CIRCLE[dimension]}
            strokeWidth="0"
            stroke="white"
            fill="white"
          />
          {status && !group && (
            <ellipse
              id="inner"
              vectorEffect="non-scaling-stroke"
              cx={ellipseCenter}
              cy={ellipseCenter}
              rx={ELLIPSE[dimension].r2}
              ry={ELLIPSE[dimension].r2}
              fill="black"
            />
          )}
          {group && (
            <circle
              cx={String(
                withActivityRing ? Number(ACTIVITY_RING[dimension]) * 3 - 4 : Number(CIRCLE[dimension]) * 3 - 2,
              )}
              cy={circleCenter}
              r={String(Number(withActivityRing ? ACTIVITY_RING[dimension] : CIRCLE[dimension]) + 2)}
              strokeWidth="0"
              stroke="black"
              fill="black"
            />
          )}
        </mask>
      </defs>
      {withActivityRing && showActivityRing && (
        <circle
          id="ring"
          cx={circleCenter}
          cy={circleCenter}
          r={ACTIVITY_RING[dimension]}
          strokeWidth="2"
          stroke={theme.color['Primary/Primary 60 Main']}
          fill="none"
          mask={useId}
        />
      )}
      {hasImage && (
        <image
          width={IMAGE_SIZE[dimension]}
          height={IMAGE_SIZE[dimension]}
          preserveAspectRatio="xMidYMid slice"
          mask={useId}
          xlinkHref={href}
          x={imageCoordinate}
          y={imageCoordinate}
        />
      )}
      {!hasImage && (
        <circle
          id="outer"
          cx={circleCenter}
          cy={circleCenter}
          r={CIRCLE[dimension]}
          strokeWidth="0"
          stroke={backgroundColor}
          fill={backgroundColor}
          mask={useId}
        />
      )}
      {status && !group && (
        <ellipse
          style={{ fill: getStatusColor(status), strokeWidth: 0, strokeOpacity: 0 }}
          vectorEffect="non-scaling-stroke"
          cx={ellipseCenter}
          cy={ellipseCenter}
          rx={ELLIPSE[dimension].r}
          ry={ELLIPSE[dimension].r}
        />
      )}
    </svg>
  );
};
