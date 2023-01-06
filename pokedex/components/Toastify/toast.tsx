import { toast } from "react-toastify";

export function ToastError() {
  toast("E-mail Inválido!", {
    hideProgressBar: true,
    autoClose: 2500,
    type: "error",
  });
}

export function ToastSuccess() {
  toast("Obrigado por se inscrever!", {
    hideProgressBar: true,
    autoClose: 2500,
    type: "success",
  });
}
