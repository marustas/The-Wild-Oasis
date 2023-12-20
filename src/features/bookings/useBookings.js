import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get('status');

    const filter = !filterValue || filterValue === 'all' ?
        null : { field: 'status', value: filterValue };

    const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
    const [field, direction] = sortByRaw.split('-');
    const sortBy = { field, direction };

    const page = !searchParams.get('page') ? 1 :
        Number(searchParams.get('page'));

    const {
        isLoading,
        data: { data: bookings, count } = {},
        error,
    } = useQuery({ queryKey: ["bookings", filter, sortBy, page], queryFn: () => getBookings({ filter, sortBy, page }) });

    /*
    Prefetching the data, which means fetching the data beforehabd.
    For example next page in pagination, that we think might come in handy in the future
    */
    const pageCount = Math.ceil(count / PAGE_SIZE);
    const queryClient = useQueryClient();

    if (page < count)
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page + 1],
            queryFn: () => getBookings({ filter, sortBy, page: page + 1 })
        });

    if (page > pageCount) queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortBy, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 })
    });

    return { isLoading, bookings, error, count }
}