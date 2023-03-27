type TextFieldProps = {
  type: string;
  register?: any;
  defaultValue?: string;
  placeholder: string;
};

const TextField = ({
  type,
  register,
  defaultValue,
  placeholder,
}: TextFieldProps) => {
  return (
    <input
      className=" w-full border border-gray-400 p-2"
      type={type}
      defaultValue={defaultValue ?? ""}
      placeholder={placeholder}
      {...register}
    />
  );
};

export default TextField;
