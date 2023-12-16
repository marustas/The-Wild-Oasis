import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

import toast from "react-hot-toast";

export function useUpdateSetting() {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("Settings were succesfully updated");
            //Make the query, specified by the key invalid, so that it is fetched by react query
            queryClient.invalidateQueries({ queryKey: ["settings"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateSetting };
}