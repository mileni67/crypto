export const withPlnBalacne = Component => {
    return props => {
        const { balance } = props
        const plnBalance = balance * 4
        return <Component {...props} plnBalance={plnBalance} />
    }
}