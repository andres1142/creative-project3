import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            totalCost: 0,
            expenses: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        let cost = Number(this.state.totalCost);
        cost += Number(this.state.price);
        this.state.totalCost = cost;

        this.setState({
            expenses: [...this.state.expenses,
                {"expense": this.state.name, "price": this.state.price}]
        });
        this.setState({name: '', price: ''});
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePrice(event) {
        this.setState({price: event.target.value});
    }


    render() {
        const listItems = this.state.expenses.map((curExpense, index) =>
            <tr>
                <td key={curExpense.expense} class={'table_entry'}>{curExpense.expense}</td>
                <td key={curExpense.expense} class={'table_entry'}>$ {curExpense.price}</td>
            </tr>
        );

        return (
            <body>
                <div className={'title_holder'}>
                    <h1>Calculate Your Expenses</h1>
                    <h3>
                        This program will help you calculate how much money you have spent.
                    </h3>
                    <h3>
                        To start, please enter an expense
                    </h3>
                </div>
                <form className={'expense_form'} onSubmit={this.handleSubmit}>
                    <div className={'forms_div'}>
                        <label className={'label1'}>
                            Description:
                            <input className={'inputField'} type="text" value={this.state.name} onChange={this.handleChangeName}/>
                        </label>
                        <label className={'label2'}>
                            Price:
                            <input className={'inputField'} type="text" value={this.state.price} onChange={this.handleChangePrice}/>
                        </label>
                    </div>
                    <div className={'button_div'}>
                        <input className={'submit_button'} type="submit" value="Add Expense"/>
                    </div>
                </form>
                <div className={'table_container'}>
                    <table>
                        <thead>
                            <tr className={'table_entry table_header'}>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>

                        <tfoot>
                            <tr className={'table_entry table_footer'}>
                                <th>Total</th>
                                <th>$ {this.state.totalCost}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </body>
        );
    }
}

export default Home;