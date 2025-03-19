import Link from "next/link"



export default function MegaMenu({ sections, showAllLink }) {
  // Calculate grid columns based on number of sections
  const getGridCols = () => {
    const sectionCount = sections.length
    if (sectionCount <= 3) return "grid-cols-3"
    return "grid-cols-3"
  }

  // Split sections into rows of 3
  const firstRow = sections.slice(0, 3)
  const secondRow = sections.slice(3)

  return (
    <div className="absolute left-0 top-full w-full bg-black z-50 border-t border-gray-800">
      {firstRow.length > 0 && (
        <div className={`container mx-auto px-6 md:px-16 py-8 grid ${getGridCols()} gap-8`}>
          {firstRow.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="text-white hover:text-green-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {secondRow.length > 0 && (
        <div className={`container mx-auto px-6 md:px-16 py-8 grid ${getGridCols()} gap-8 border-t border-gray-800`}>
          {secondRow.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="text-white hover:text-green-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {showAllLink && (
        <div className="container mx-auto px-6 md:px-16 py-4 flex justify-end border-t border-gray-800">
          <Link href={showAllLink.href} className="text-white hover:text-green-400 transition-colors font-medium">
            {showAllLink.label}
          </Link>
        </div>
      )}
    </div>
  )
}

