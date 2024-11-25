interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline';
}

const buttonVariants = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    'primary-outline': 'btn btn-primary-outline',
    'secondary-outline': 'btn btn-secondary-outline',
};

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
    return (
        <button className={`btn ${buttonVariants[variant]}`} {...rest}>
            {children}
        </button>
    );
};
