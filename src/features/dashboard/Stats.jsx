import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineChartBar,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  const numBookings = bookings.length;

  const occupation = Math.round(
    (confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
      numDays /
      cabinCount) *
      100
  );

  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const totalCheckins = confirmedStays.length;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupation + `%`}
      />
    </>
  );
};

export default Stats;
