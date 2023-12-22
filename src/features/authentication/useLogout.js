import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isLoading: isLoggingOut, mutate: logout } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/login', { replace: true })
        },
        onError: () => { toast.error('There was an error logging out') }
    })

    return { isLoggingOut, logout };
}