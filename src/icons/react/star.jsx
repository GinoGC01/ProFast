export function Star({ filled }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill={filled ? "gold" : "gray"}
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.844 1.5 8.272-7.436-3.896L4.564 23.422 6.064 15.15 0 9.306l8.332-1.151L12 .587z"
      />
    </svg>
  );
}
