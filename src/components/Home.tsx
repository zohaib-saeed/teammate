import React, { useState } from 'react';
import { FiPlus as IconPlus } from 'react-icons/fi';
import { RiDeleteBinLine as IconDelete } from 'react-icons/ri';
import { MdArrowDropUp as IconUp } from 'react-icons/md';
import { MdArrowDropDown as IconDown } from 'react-icons/md';
import { AiOutlineBold as IconBold } from 'react-icons/ai';
import { RiPaintFill as IconHighlight } from 'react-icons/ri';
import { MdFormatListBulleted as IconBulletList } from 'react-icons/md';
import { HiMiniBars3BottomLeft as IconAlignLeft } from 'react-icons/hi2';
import { BsTypeUnderline as IconUnderline } from 'react-icons/bs';
import { Button, Modal, ScrollArea, Switch, NumberInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import ActiveCheckSelect from './ActiveCheckSelect';

interface Item {
  emoji: string;
  value: string;
  description: string;
}

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // States
  const [materialSwitch, setMaterialSwitch] = useState(false);

  const content = '<p>Add a comment</p>';

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      Placeholder.configure({ placeholder: 'Add a comment' }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <Button onClick={open} className="bg-blue-500 rounded">
          Toggle Modal
        </Button>
      </div>
      {/* Modal  */}
      <Modal
        size={1100}
        centered
        opened={opened}
        onClose={close}
        title="Uren toevoegen"
        scrollAreaComponent={ScrollArea.Autosize}
        withCloseButton
        classNames={{
          header: 'bg-blue-500 text-white font-medium lg:px-8',
          body: 'lg:px-8',
          close: 'text-white',
        }}
      >
        <div className="w-full flex flex-col items-center justify-start gap-5 py-6">
          <div className="w-full h-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-9">
            {/* Col 1 */}
            <div className="w-full flex flex-col items-center justify-start gap-3 lg:gap-6">
              <div className="w-full grid sm:grid-cols-2 gap-3 lg:gap-6">
                <ActiveCheckSelect label="Employee" placeholder="Select a Employee" required />
                <ActiveCheckSelect label="Project" placeholder="Select a Project" required />
              </div>
              <div className="w-full grid sm:grid-cols-2 gap-3 lg:gap-6">
                <ActiveCheckSelect label="Customer" placeholder="Select a Customer" required />
                <NumberInput
                  label="Break"
                  placeholder="0"
                  hideControls
                  classNames={{
                    root: 'w-full',
                    input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                  }}
                />
              </div>
              <div className="w-full grid sm:grid-cols-2 gap-3 lg:gap-6">
                {!materialSwitch ? (
                  <div className="w-full grid grid-cols-2 gap-3 lg:gap-6">
                    <NumberInput
                      label="From"
                      placeholder="00:00"
                      required
                      hideControls
                      classNames={{
                        root: 'w-full',
                        required: 'text-black',
                        input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                      }}
                    />
                    <NumberInput
                      label="To"
                      placeholder="00:00"
                      required
                      hideControls
                      classNames={{
                        root: 'w-full',
                        required: 'text-black',
                        input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                      }}
                    />
                  </div>
                ) : (
                  <NumberInput
                    label="Hours"
                    placeholder="Enter the Number of Hours"
                    required
                    hideControls
                    classNames={{
                      root: 'w-full',
                      required: 'text-black',
                      input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                    }}
                  />
                )}
                {!materialSwitch ? (
                  <NumberInput
                    label="Hours"
                    placeholder="Enter the Number of Hours"
                    required
                    hideControls
                    classNames={{
                      root: 'w-full',
                      required: 'text-black',
                      input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                    }}
                  />
                ) : (
                  <div className="w-full grid grid-cols-2 gap-3 lg:gap-6">
                    <NumberInput
                      label="From"
                      placeholder="00:00"
                      required
                      hideControls
                      classNames={{
                        root: 'w-full',
                        required: 'text-black',
                        input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                      }}
                    />
                    <NumberInput
                      label="To"
                      placeholder="00:00"
                      required
                      hideControls
                      classNames={{
                        root: 'w-full',
                        required: 'text-black',
                        input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <div className="font-medium text-black text-sm">Comment</div>
                <RichTextEditor
                  editor={editor}
                  title="Comment"
                  classNames={{
                    root: 'w-full custom-style-list text',
                    control: 'border-0 p-0 min-w-auto',
                    toolbar: 'border-b-0 py-2 px-2 gap-0 ',
                    content: 'max-h-[300px] min-h-[120px] overflow-auto !text-slate-500 py-0',
                    typographyStylesProvider: 'px-0 py-0',
                  }}
                >
                  <RichTextEditor.Toolbar className="!text-slate-500">
                    {/* Font Weight  */}
                    <div className="flex items-center justify-between gap-3 mr-2">
                      <div className="font-light text-slate-500">Normal</div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-0 bg-transparent -mb-2">
                          <IconUp className="text-slate-500" size={20} />
                        </div>
                        <div className="p-0 bg-transparent -mt-[6px]">
                          <IconDown className="text-slate-500" size={20} />
                        </div>
                      </div>
                    </div>
                    {/* Font Family  */}
                    <div className="flex items-center justify-between gap-3 mr-2">
                      <div className="font-light text-slate-500">Sailec Light</div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-0 bg-transparent -mb-2">
                          <IconUp className="text-slate-500" size={20} />
                        </div>
                        <div className="p-0 bg-transparent -mt-[6px]">
                          <IconDown className="text-slate-500" size={20} />
                        </div>
                      </div>
                    </div>
                    <RichTextEditor.Bold icon={() => <IconBold />} />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline icon={() => <IconUnderline />} />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.Highlight icon={() => <IconHighlight />} />
                    <RichTextEditor.AlignLeft icon={() => <IconAlignLeft size={18} />} />
                    <RichTextEditor.BulletList icon={() => <IconBulletList size={18} />} />
                  </RichTextEditor.Toolbar>

                  <RichTextEditor.Content />
                </RichTextEditor>
              </div>
            </div>
            {/* Col 2  */}
            <div className="w-full flex flex-col items-center justify-start gap-2 border-[1px] rounded-lg border-gray-300 border-solid">
              <div className="w-full px-4 py-4 flex items-center justify-between border-b-[1px] broder-solid border-gray-300">
                <div className="font-medium text-black text-base">Add Materials</div>
                <Switch
                  checked={materialSwitch}
                  onChange={(event) => setMaterialSwitch(event.currentTarget.checked)}
                  color=""
                  classNames={{
                    track: `${materialSwitch && 'bg-blue-100 border-0'}`,
                    thumb: `${materialSwitch && 'bg-blue-500 border-0'}`,
                  }}
                />
              </div>
              {!materialSwitch ? (
                <div className="w-full flex-1 flex flex-col items-center justify-center px-4 py-4">
                  <p className="w-full text-gray-400 font-normal text-base text-center">
                    Start adding items to show them here
                  </p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-between gap-4">
                  <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-2 px-4">
                    <div className="w-full grid lg:grid-cols-[1.3fr_0.7fr] gap-2">
                      <ActiveCheckSelect
                        label="Material"
                        placeholder="Enter Material Name"
                        required
                      />
                      <NumberInput
                        label="Amount"
                        placeholder="Enter Amount"
                        hideControls
                        classNames={{
                          root: 'w-full',
                          input: 'text-slate-500 font-semibold mt-1 placeholder:text-slate-500',
                        }}
                      />
                    </div>
                    <div className="bg-blue-500 p-1 text-white flex items-center justify-center rounded">
                      <IconPlus size={30} />
                    </div>
                  </div>
                  {/* Table  */}
                  <div className="w-full flex flex-col items-center justify-start">
                    {/* Table Head  */}
                    <div className="w-full text-slate-500 text-sm font-medium grid grid-cols-[1fr_0.5fr_0.5fr] gap-2 bg-gray-50 py-3">
                      <div className="px-4">Materials</div>
                      <div className="px-4">Amount</div>
                      <div className="px-4">Actions</div>
                    </div>
                    {/* Table Body  */}
                    {[0, 1, 2, 3, 4].map((item, index) => (
                      <div className="w-full text-slate-500 text-sm font-medium grid grid-cols-[1fr_0.5fr_0.5fr] gap-2 border-t-[1px] border-solid border-gray-300 py-4">
                        <div className="px-4">Wall Paint Paper</div>
                        <div className="px-4">04</div>
                        <div className="px-4">
                          <IconDelete size={20} className="text-red-500 " />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-3">
            <Button variant="outline">Start timer</Button>
            <Button
              variant="filled"
              classNames={{
                root: 'bg-blue-500',
              }}
            >
              Uren toevoegen
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
