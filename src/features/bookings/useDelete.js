import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDelete() {
    const queryClient = useQueryClient();

    const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success(`Booking successfully deleted`);
            queryClient.invalidateQueries({ queryKey: ['bookings'] });
        },
        onError: () => { toast.error('An error occured when deleting a booking ') }
    })

    return { deleteBooking, isDeleting };
}