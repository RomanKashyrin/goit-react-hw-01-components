import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <div className={css.transaction_box}>

            <table className={css.transaction_history}>
                <thead className={css.transaction_class}>
                    <tr>
                        <th className={css.transaction_title}>Type</th>
                        <th className={css.transaction_title}>Amount</th>
                        <th className={css.transaction_title}>Currency</th>
                    </tr>
                </thead>

                <tbody className={css.info}>
                    {items.map(({ id, type, amount, currency }) => (
                        <tr key={id} className={css.info_item}>
                            <td className={css.info_item_discr}>{type}</td>
                            <td className={css.info_item_discr}>{amount}</td>
                            <td className={css.info_item_discr}>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string,
        })
    ),
}