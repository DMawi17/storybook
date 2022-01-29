import Stack from "../Component/Stack";

export default {
    title: "Component/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 },
    },
};

// export const Red = () => <Button label="Press me" backgroundColor="red" />;

const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map((n) => (
            <div
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {n + 1}
            </div>
        ))}
    </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
    numberOfChildren: 20,
    direction: "row",
    spacing: 2,
    wrap: true,
};
export const Empty = Template.bind({});
Empty.args = {
    numberOfChildren: 0,
    direction: "row",
    spacing: 2,
    wrap: false,
};
