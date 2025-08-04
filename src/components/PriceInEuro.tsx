type Props = {
  price: string
}

const PriceInEuro = ({ price }: Props) => {
  return (
    <>
    
    {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(Number(price))}
    </>
  )
}

export default PriceInEuro