import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get('status');

    const filter = !filterValue || filterValue === 'all' ?
        null : { field: 'totalPrice', value: 1000, method: 'gte' };

    const {
        isLoading,
        data: bookings,
        error,
    } = useQuery({ queryKey: ["bookings", filter], queryFn: () => getBookings({ filter }) });

    return { isLoading, bookings, error }
}