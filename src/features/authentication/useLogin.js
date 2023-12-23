import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isLoading: isLogging, mutate: login } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            navigate('/dashboard');
            queryClient.setQueryData(['user'], user.user)
        },
        onError: () => { toast.error('There was an error logging in') }
    })
    return { isLogging, login };
}