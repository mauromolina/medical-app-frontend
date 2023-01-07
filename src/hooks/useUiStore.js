import { useDispatch, useSelector } from "react-redux";
import {
  onCloseDateModal,
  onOpenDateModal,
  onRemoveActiveRecord,
} from "../state";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onRemoveActiveRecord());
    dispatch(onOpenDateModal());
  };

  const openUpdateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
    openUpdateModal,
  };
};
