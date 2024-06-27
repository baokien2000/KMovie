import { cn } from "@/lib/cn";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, cloneElement, createContext, forwardRef, useContext, useEffect, useState } from "react";

type ModalContextType = {
    open: boolean;
    openModal: () => void;
    closeModal: () => void;
};
 
const ModalContext = createContext({} as ModalContextType);

function Modal({ children, onRequestClose }: { children: React.ReactNode; onRequestClose?: () => void }) {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);

    const closeModal = () => {
        setOpen(false);
        onRequestClose?.();
    };

    return <ModalContext.Provider value={{ open, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

function Open({ children, onCallBack }: { children: React.ReactElement; onCallBack?: () => void }) {
    const { openModal } = useContext(ModalContext);

    return (
        <>
            {cloneElement(children, {
                onClick: () => {
                    openModal();
                    onCallBack?.();
                },
            })}
        </>
    );
}

function ButtonClose({ icon }: { icon?: React.ReactNode }) {
    const { closeModal } = useContext(ModalContext);
    return icon ? (
        <button type="button" className="absolute right-[24px] focus:outline-none focus-visible:outline-none" onClick={closeModal}>
            {icon}
        </button>
    ) : (
        <button
            className="absolute right-[8px] top-[8px] z-50 h-[32px] w-[32px] rounded-full bg-[rgba(0,0,0,0.45)] p-[8px] tablet:right-4  tablet:top-4  "
            onClick={closeModal}
            type="button"
        >
            <svg className="h-[16px] w-[16px] " width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32.1351 30.3656C32.2512 30.4817 32.3433 30.6196 32.4062 30.7713C32.469 30.9231 32.5014 31.0857 32.5014 31.25C32.5014 31.4142 32.469 31.5768 32.4062 31.7286C32.3433 31.8803 32.2512 32.0182 32.1351 32.1343C32.0189 32.2505 31.8811 32.3426 31.7293 32.4055C31.5776 32.4683 31.4149 32.5007 31.2507 32.5007C31.0865 32.5007 30.9238 32.4683 30.7721 32.4055C30.6203 32.3426 30.4825 32.2505 30.3663 32.1343L20.0007 21.7671L9.63507 32.1343C9.40052 32.3689 9.0824 32.5007 8.75069 32.5007C8.41899 32.5007 8.10087 32.3689 7.86632 32.1343C7.63177 31.8998 7.5 31.5817 7.5 31.25C7.5 30.9183 7.63177 30.6001 7.86632 30.3656L18.2335 20L7.86632 9.63434C7.63177 9.39979 7.5 9.08167 7.5 8.74996C7.5 8.41826 7.63177 8.10014 7.86632 7.86559C8.10087 7.63104 8.41899 7.49927 8.75069 7.49927C9.0824 7.49927 9.40052 7.63104 9.63507 7.86559L20.0007 18.2328L30.3663 7.86559C30.6009 7.63104 30.919 7.49927 31.2507 7.49927C31.5824 7.49927 31.9005 7.63104 32.1351 7.86559C32.3696 8.10014 32.5014 8.41826 32.5014 8.74996C32.5014 9.08167 32.3696 9.39979 32.1351 9.63434L21.7679 20L32.1351 30.3656Z"
                    fill="white"
                />
            </svg>
        </button>
    );
}

function Content(
    {
        children,
        className,
        modalClassName,
        icon,
        disableOutsideClick = false,
    }: {
        children: (closeModal?: () => void) => React.ReactNode | React.ReactNode[];
        modalClassName?: string;
        className?: string;
        icon?: ReactNode;
        disableOutsideClick?: boolean;
    },
    ref: any
) {
    const { open, closeModal } = useContext(ModalContext);

    useEffect(() => {
        document.body.style.width = open ? "100vw" : "auto";
        // document.body.style.paddingRight = open ? "16px" : "0px";
        if (open && document.body.style.overflow !== "unset") {
            document.body.classList.add("add-padding-when-open-popup");
        } else {
            document.body.classList.remove("add-padding-when-open-popup");
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.classList.remove("add-padding-when-open-popup");
        };
    }, [open]);
    if (!open) return null;

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" static onClose={() => (disableOutsideClick ? null : closeModal())}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 w-screen overflow-y-auto">
                    <div className={cn("flex min-h-full items-center justify-center p-4 text-center", modalClassName)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                ref={ref}
                                className={cn(
                                    "relative aspect-square h-full w-full max-w-xl transform  bg-white  text-left align-middle shadow-xl transition-all desktop:max-w-3xl",
                                    className
                                )}
                            >
                                <ButtonClose icon={icon} />
                                {open && <div> {children(closeModal)}</div>}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

function ButtonActions({ children, className }: { children: React.ReactNode; className?: string }) {
    // const { closeModal } = useContext(ModalContext);
    // return <div className={className}>{children(closeModal)}</div>;
    return <div className={className}>{children}</div>;
}

Modal.Open = Open;
Modal.Content = forwardRef(Content);
Modal.ButtonActions = ButtonActions;
export default Modal;
