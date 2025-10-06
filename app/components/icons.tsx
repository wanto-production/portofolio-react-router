import * as LuIcons from 'react-icons/lu';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import type { ComponentType, SVGProps } from 'react';

// Helper to convert kebab-case to PascalCase with prefix
const toPascalCase = (str: string, prefix: string): string => {
  const pascal = str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  return prefix + pascal;
};

// Extract base icon names (remove prefix like Lu, Fa, etc)
type LuIconName = keyof typeof LuIcons;
type FaIconName = keyof typeof FaIcons;
type Fa6IconName = keyof typeof Fa6Icons;
type SiIconName = keyof typeof SiIcons;
type MdIconName = keyof typeof MdIcons;
type IoIconName = keyof typeof IoIcons;
type BiIconName = keyof typeof BiIcons;
type AiIconName = keyof typeof AiIcons;

type IconName = string;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

export function Icon({ name, size = 24, color, className, ...props }: IconProps) {
  // Parse prefix and icon name
  const [prefix, iconName] = name.split(':') as [string, string];

  if (!prefix || !iconName) {
    console.warn(`Invalid icon format: ${name}. Use format "prefix:icon-name"`);
    return null;
  }

  let IconComponent: ComponentType<any> | undefined;
  let fullIconName: string;

  // Select the appropriate icon library and convert to proper format
  switch (prefix.toLowerCase()) {
    case 'lu':
      fullIconName = toPascalCase(iconName, 'Lu');
      IconComponent = LuIcons[fullIconName as LuIconName] as ComponentType<any>;
      break;
    case 'fa':
      fullIconName = toPascalCase(iconName, 'Fa');
      IconComponent = FaIcons[fullIconName as FaIconName] as ComponentType<any>;
      break;
    case 'fa6':
      fullIconName = toPascalCase(iconName, 'Fa');
      IconComponent = Fa6Icons[fullIconName as Fa6IconName] as ComponentType<any>;
      break;
    case 'si':
      fullIconName = toPascalCase(iconName, 'Si');
      IconComponent = SiIcons[fullIconName as SiIconName] as ComponentType<any>;
      break;
    case 'md':
      fullIconName = toPascalCase(iconName, 'Md');
      IconComponent = MdIcons[fullIconName as MdIconName] as ComponentType<any>;
      break;
    case 'io':
      fullIconName = toPascalCase(iconName, 'Io');
      IconComponent = IoIcons[fullIconName as IoIconName] as ComponentType<any>;
      break;
    case 'bi':
      fullIconName = toPascalCase(iconName, 'Bi');
      IconComponent = BiIcons[fullIconName as BiIconName] as ComponentType<any>;
      break;
    case 'ai':
      fullIconName = toPascalCase(iconName, 'Ai');
      IconComponent = AiIcons[fullIconName as AiIconName] as ComponentType<any>;
      break;
    default:
      console.warn(`Unknown icon prefix: ${prefix}`);
  }

  if (IconComponent && typeof IconComponent === 'function') {
    return (
      <IconComponent
        size={size}
        color={color}
        className={className}
        {...props}
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed currentColor',
        borderRadius: '4px',
        fontSize: '10px',
        color: color || 'currentColor',
      }}
      title={`Icon not found: ${name}`}
    >
      ?
    </div>
  );
}

// Export type for autocomplete
export type { IconName, IconProps };
