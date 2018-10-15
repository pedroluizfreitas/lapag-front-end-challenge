import React, { Component } from 'react'
import moment from 'moment'
import Apontamento from './agendamento'

export default class TimeSlot extends Component {
   
    render() {

        const {
            time,
            increase,
            slots,
            data,
            discard
        } = this.props
        const style = {

            td: {
                height: 1
            }
        }

        const isHaveData = (id) => {
            let result = undefined;
            (data || []).forEach(element => {
                if (element.slotid === id) {
                    result = element;
                }
            });

            return result;
        }

        const isToDiscard = (id) => {
            let result = false;
            (discard || []).forEach(element => {
                if (element === id) {
                    result = true;
                }
            });

            return result;

        }

        const getDiffrence = (t1, t2) => {
            const format = 'HH:mm'
            let b = moment(t1, ["h:mm A"]).format("HH:mm");
            let a = moment(t2, ["h:mm A"]).format("HH:mm");

            let beforeTime = moment(b, format)
            let afterTime = moment(a, format);



            let result = afterTime.diff(beforeTime, 'minutes');
            if (result < 0) {
                result = (result) * -1;
            }
            return result;
        }

        const renderSlots = () => {

            return slots.map((slot) => {

                let ifData = isHaveData(slot.id);
                if (ifData) {

                    let dif = getDiffrence(ifData.from, ifData.to);
                    return <Apontamento data={ifData} rowSpan={(dif / (increase * 60)) + 1} />
                
                }
                else if (isToDiscard(slot.id)) {

                }
                else {
                    return <td></td>
                }

            })

        }

        return (
            <tr>
                <td>{time}</td>
                {renderSlots()}
            </tr>

        )
    }
}
