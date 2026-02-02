// Re-export the single source of truth for the minimal splash from the root `components` directory.
// This prevents duplicate implementations and keeps `@/components/minimal-splash` resolving
// consistently to the same module.

export { default } from '@/components/minimal-splash';

