export type Node = {
    id: number;
    name: string;
    children: Node[];
};

export type ResponseError = {
    type: string;
    id: string;
    data: {
        message: string;
    };
};

export type ModalProps = { onSuccess: () => void };
