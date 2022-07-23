export const BaseSVGIcon = ({
    children,
    color = 'inherit',
    htmlColor,
    fontSize = 'default',
    viewBox = '0 0 24 24',
    width,
    height,
    fill,
    stroke,
    className,
    ...passedProps
}) => {
    return (
        <svg
            {...passedProps}
            className={className}
            viewBox={viewBox}
            aria-hidden
            role={undefined}
            width={width}
            height={height}
            fill={fill}
            color={htmlColor}
            stroke={stroke}
        >
            {children}
        </svg>
    );
};