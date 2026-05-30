const logo = `${import.meta.env.BASE_URL}images/bonoan-labs-logo.png`

export function Watermark() {
  return (
    <div
      className="pointer-events-none fixed right-3 bottom-3 z-40 select-none sm:right-4 sm:bottom-4"
      aria-hidden="true"
    >
      <div className="rounded-sm bg-forest-dark/75 px-2 py-1.5 backdrop-blur-sm">
        <img
          src={logo}
          alt="Bonoan Labs"
          className="h-7 w-auto opacity-80 sm:h-8"
          draggable={false}
        />
      </div>
    </div>
  )
}
