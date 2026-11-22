import {
  ArrowLeft, ArrowRight, Bookmark, Check, ChevronLeft, ChevronRight,
  Circle, CircleCheck, Cloud, Clock3, Compass, Eye, Footprints, Headphones,
  Heart, Leaf, LocateFixed, MapPin, MessageCircle, Music2, Navigation,
  Pause, Play, Search, ShieldCheck, Smile, Sparkles, Sun, TrendingUp,
  UserRound, Users,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  'arrow-forward': ArrowRight,
  'chevron-back': ChevronLeft,
  'chevron-forward': ChevronRight,
  'eye-outline': Eye,
  'headset-outline': Headphones,
  heart: Heart,
  'leaf-outline': Leaf,
  leaf: Leaf,
  'location-outline': MapPin,
  location: MapPin,
  navigate: Navigation,
  person: UserRound,
  'person-circle': UserRound,
  'search-outline': Search,
  sparkles: Sparkles,
  'time-outline': Clock3,
  'walk-outline': Footprints,
  'cloud-outline': Cloud,
  'sunny-outline': Sun,
  'compass-outline': Compass,
  'happy-outline': Smile,
  'arrow-back': ArrowLeft,
  'bookmark-outline': Bookmark,
  bookmark: Bookmark,
  'shield-checkmark-outline': ShieldCheck,
  'trending-up-outline': TrendingUp,
  'people-outline': Users,
  'headset': Headphones,
  'musical-notes-outline': Music2,
  'checkmark-circle': CircleCheck,
  'ellipse-outline': Circle,
  checkmark: Check,
  'chatbubble-ellipses-outline': MessageCircle,
  'locate-outline': LocateFixed,
  pause: Pause,
  play: Play,
};

export type IconName = string;

export function Ionicons({ name, size = 24, color = 'currentColor' }: { name: IconName; size?: number; color?: string }) {
  const Icon = icons[name] ?? Circle;
  return <Icon size={size} color={color} strokeWidth={1.8} aria-hidden="true" focusable="false" />;
}
