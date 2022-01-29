import Button from "../Component/Button";

export default {
    title: "Component/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
};

// export const Red = () => <Button label="Press me" backgroundColor="red" />;

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md",
};

export const PapayaWhip = Template.bind({});
PapayaWhip.args = {
    backgroundColor: "papayaWhip",
    label: "Press me again",
    size: "sm",
};

export const Large = Template.bind({});
Large.args = {
    backgroundColor: "powderBlue",
    label: "Press me again",
    size: "lg",
};

export const Long = Template.bind({});
Long.args = {
    backgroundColor: "tomato",
    label: "Press me for long long long long long",
    size: "lg",
};
