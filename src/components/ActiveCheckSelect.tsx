import React, { useState } from 'react';
import { FaCircleCheck as IconCheck } from 'react-icons/fa6';
import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';

interface Props {
  label: string;
  placeholder: string;
  required?: boolean;
}

const ActiveCheckSelect: React.FC<Props> = ({ label, placeholder, required }) => {
  const selectData = [
    { value: 'Jop Walternick 1', title: 'Jop Walternick' },
    { value: 'Jop Walternick 2', title: 'Jop Walternick' },
    { value: 'Jop Walternick 3', title: 'Jop Walternick' },
    { value: 'Jop Walternick 4', title: 'Jop Walternick' },
    { value: 'Jop Walternick 5', title: 'Jop Walternick' },
  ];

  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [showCheck, setShowCheck] = useState(false);
  const selectedOption = selectData.find((item) => item.value === selectValue);

  const combobox = useCombobox({
    onDropdownClose: () => {
      if (selectValue === selectedOption?.value) {
        setShowCheck(false);
      }
    },
    onDropdownOpen: (eventSource) => {
      if (selectValue === selectedOption?.value) {
        setShowCheck(true);
      }
    },
  });

  function SelectOption({ title, value }: any) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center justify-start gap-2">
            <div className="text-white text-[10px] rounded-full p-[4px] bg-blue-400">JW</div>
            <div>{title}</div>
          </div>
          {value === selectValue && <IconCheck size={20} className="text-blue-500 inside-hidden" />}
        </div>
      </div>
    );
  }

  const options = selectData.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setSelectValue(val);
        combobox.closeDropdown();
      }}
      classNames={{
        dropdown: 'py-0 px-0',
        option: 'hover:bg-blue-100 py-2 rounded-none h-auto',
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          label={label}
          required={required}
          pointer
          rightSection={<Combobox.Chevron size="lg" />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          multiline
          classNames={{
            root: 'w-full pb-0',
            required: 'text-black',
            label: 'mb-1',
            input: `!text-slate-500 font-semibold`,
          }}
        >
          {selectedOption ? (
            <SelectOption {...selectedOption} />
          ) : (
            <Input.Placeholder classNames={{ placeholder: 'font-semibold text-slate-500' }}>
              {placeholder}
            </Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default ActiveCheckSelect;
