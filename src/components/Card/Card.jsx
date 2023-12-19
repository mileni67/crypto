import { withPlnBalacne } from '../../helpers/hoc/withPlnBalance';
import './styles.css';

const Card = ({ balance, setBalance, plnBalance }) => {
    console.log({ plnBalance });
    return (
        <div className="card">
            <div className="card-block">
                <p>CRYPTO-FINANCE</p>
                <button onClick={() => setBalance((prev) => prev + 1000)}>
                    Add money
                </button>
            </div>

            <div className="card-block">
                <p>OLEKSANDR</p>
                <p>{balance} $</p>
            </div>
        </div>
    )
}

export default withPlnBalacne(Card);