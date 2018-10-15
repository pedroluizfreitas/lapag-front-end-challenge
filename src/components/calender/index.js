import React, { Component } from 'react'
import moment from 'moment'
import TimeSlot from './../calender/time-slot'

import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './calendar.css'

export class CalendarComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDay: moment().format('DD MMMM YYYY'),
        }
    }

    changeday(item) {
        this.setState({ currentDay: moment().add(item, 'days').format('DD MMMM YYYY') })
    }

    render() {

        const {
            start,
            range,
            increase,
            reserveSolts,
            dayreservations
        } = this.props

        let stratTime = `${this.state.currentDay},` + start;
        let timeSolts = [];
        let loop = (range / increase);


        const renderReserveSlots = () => {
            return (reserveSolts || []).map((solt) => {
                return <td>{solt.name}</td>
            })
        }


        const convertTime = (time) => {
            const format = 'HH:mm'
            let converted = moment(time, ["h:mm A"]).format("HH:mm");
            converted = moment(time, format)

            return converted

        }

        const isReserveExist = (time) => {

            let slotTime = convertTime(time);

            let value = [];
            this.props.dayreservations.forEach(item => {

                let timeFrom = convertTime(item.from);
                let timeTo = convertTime(item.to)

                if (item.from == time) {


                    value = [...value, item];
                }
            });
            // console.log("isReserveExist", slotTime, value)
            return value;

        }

        const withInRange = (_time) => {
            let discard = [];

            (this.props.dayreservations || []).map((resrvation) => {

                let checkedTime = moment(_time, ["h:mm A"]).format("HH:mm");

                let timeForm = moment(resrvation.from, ["h:mm A"]).format("HH:mm");
                let timeTo = moment(resrvation.to, ["h:mm A"]).format("HH:mm");

                var format = 'HH:mm'
                checkedTime = moment(checkedTime, format);

                timeForm = moment(timeForm, format);
                timeTo = moment(timeTo, format);


                if (checkedTime.isBetween(timeForm, timeTo) || _time === resrvation.to) {

                    discard = [...discard, resrvation.slotid];

                }

            });

            return discard;
        }


        const renderFullSlots = () => {

            return (timeSolts || []).map((soltItem, index) => {

                let cheak, data;

                if (isReserveExist(soltItem)) {
                    cheak = "btn btn-danger";
                    data = isReserveExist(soltItem);

                } else {
                    cheak = undefined;
                    data = undefined;
                }

                return <TimeSlot
                    time={soltItem}
                    slots={reserveSolts}
                    data={data}
                    discard={withInRange(soltItem)}
                    increase={increase}
                />

            })
        }

        for (let i = 0; i <= loop; i++) {
            timeSolts.push(moment(stratTime).add(increase * i, 'hours').format('h:mm a'))
        }


        const renderbuttons = () => {

            return <div className="text-center" >
                <h1>{this.state.currentDay}</h1>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-8)} >-8</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-7)} >-7</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-6)} >-6</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-5)} >-5</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-4)} >-4</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-3)} >-3</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-2)} >-2</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(-1)} >-1</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(0)} >Hoje</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(1)} >+1</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(2)} >+2</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(3)} >+3</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(4)} >+4</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(5)} >+5</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(6)} >+6</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(7)} >+7</button>
                <button className="btn btn-defualt" style={{ margin: 1 }} onClick={() => this.changeday(8)} >+8</button>


            </div>
        }

        return (

            <div>
                {renderbuttons()}
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <td></td>
                            {renderReserveSlots()}
                        </tr>
                    </thead>
                    <tbody>
                        {renderFullSlots()}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default CalendarComponent;
