interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <>
      <h3 
        className="text-zinc-900 dark:text-zinc-50 text-base font-bold leading-tight tracking-[-0.015em] pt-6 pb-2 first:pt-4"
        data-testid={`settings-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h3>
      <div className="flex flex-col overflow-hidden rounded-lg bg-white dark:bg-zinc-800/50">
        {children}
      </div>
    </>
  );
}
