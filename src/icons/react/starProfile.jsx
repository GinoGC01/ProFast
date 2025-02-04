export function StarProfile({ color, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.844 1.5 8.272-7.436-3.896L4.564 23.422 6.064 15.15 0 9.306l8.332-1.151L12 .587z"
      />
    </svg>
  )
}
