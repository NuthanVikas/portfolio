type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

/**
 * SectionHeader: consistent heading pattern for each section.
 * Eyebrow keeps things organized, title provides context, and description adds detail.
 */
const SectionHeader = ({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) => (
  <div className="space-y-3 text-center md:text-left">
    <p className="text-xs uppercase tracking-[0.3em] text-secondary">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold text-white">{title}</h2>
    <p className="text-sm text-slate-300">{description}</p>
  </div>
)

export default SectionHeader
