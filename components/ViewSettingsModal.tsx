import React, { useState } from "react";
import { X, Plus, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type RuleType = { rule: any; updateRule: any; removeRule: any };
const Rule = ({ rule, updateRule, removeRule }: RuleType) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: rule.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-gray-700 p-3 rounded-lg mb-3"
    >
      <div className="flex items-center mb-2">
        <div {...listeners} className="cursor-move mr-2">
          <GripVertical size={16} className="text-gray-400" />
        </div>
        <select
          value={rule.type}
          onChange={(e) => updateRule(rule.id, { type: e.target.value })}
          className="text-sm bg-gray-600 text-white border-none rounded-md p-1 mr-2"
        >
          <option value="include" className="bg-green-700">
            Include
          </option>
          <option value="exclude" className="bg-red-700">
            Exclude
          </option>
        </select>
        <button
          onClick={() => removeRule(rule.id)}
          className="text-red-400 hover:text-red-300 ml-auto"
        >
          <X size={16} />
        </button>
      </div>
      <textarea
        value={rule.text}
        onChange={(e) => updateRule(rule.id, { text: e.target.value })}
        placeholder="Enter rule description..."
        className="w-full text-sm bg-gray-600 text-white border-none rounded-md p-2 resize-y min-h-[60px]"
      />
    </div>
  );
};

type VSMType = { isOpen: any; onClose: any; viewName: any };
const ViewSettingsModal = ({ isOpen, onClose, viewName }: VSMType) => {
  const [rules, setRules] = useState([
    {
      id: "1",
      type: "include",
      text: "emails that are from or mention the CS Department",
    },
    {
      id: "2",
      type: "exclude",
      text: "emails that are directed towards undergrad students",
    },
    { id: "3", type: "exclude", text: "emails from the student magazine" },
    { id: "4", type: "include", text: "any reference to my team's research" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setRules((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, reorderedItem);
        return newItems;
      });
    }
  };

  const updateRule = (id: any, updates: any) => {
    setRules(
      rules.map((rule) => (rule.id === id ? { ...rule, ...updates } : rule)),
    );
  };

  const removeRule = (id: any) => {
    setRules(rules.filter((rule) => rule.id !== id));
  };

  const addRule = () => {
    const newRule = {
      id: String(Date.now()),
      type: "include",
      text: "",
    };
    setRules([...rules, newRule]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl">
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          {viewName}
        </h3>
        <div className="space-y-4 max-h-[calc(90vh-12rem)] overflow-y-auto pr-2">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={rules}
              strategy={verticalListSortingStrategy}
            >
              {rules.map((rule) => (
                <Rule
                  key={rule.id}
                  rule={rule}
                  updateRule={updateRule}
                  removeRule={removeRule}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={addRule}
            className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 flex items-center justify-center"
          >
            <Plus size={16} className="mr-2" />
            Add Rule
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSettingsModal;
