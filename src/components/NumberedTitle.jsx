function NumberedTitle({ number, title }) {
  return (
    <p className="numbered-title fs-500 uppercase ff-barlow-condensed letter-spacing-3">
      <span className="text-grey fw-bold">{number}</span>
      {title}
    </p>
  )
}

export default NumberedTitle