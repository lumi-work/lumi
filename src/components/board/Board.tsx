import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { fetchInitialData } from "@/components/board/InitialData"; // Veriyi asenkron olarak çeken fonksiyon

interface Item {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  itemIds: string[];
}

interface Data {
  columns: { [key: string]: Column };
  items: { [key: string]: Item };
  columnOrder: string[];
}

const Board: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await fetchInitialData();
        console.log("Initial Data:", initialData);

        if (initialData && initialData.columns && initialData.items && initialData.columnOrder) {
          setData(initialData);
        } else {
          console.error("Geçersiz veri yapısı:", initialData);
        }
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!data) return;

    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const start = data.columns[source.droppableId];
      const finish = data.columns[destination.droppableId];
      const startItemIds = Array.from(start.itemIds);
      const finishItemIds = Array.from(finish.itemIds);

      const [movedItemId] = startItemIds.splice(source.index, 1);
      finishItemIds.splice(destination.index, 0, movedItemId);

      const updatedColumns = {
        ...data.columns,
        [source.droppableId]: { ...start, itemIds: startItemIds },
        [destination.droppableId]: { ...finish, itemIds: finishItemIds },
      };

      setData({ ...data, columns: updatedColumns });
      return;
    }

    const column = data.columns[source.droppableId];
    const updatedItemIds = Array.from(column.itemIds);
    const [movedItemId] = updatedItemIds.splice(source.index, 1);
    updatedItemIds.splice(destination.index, 0, movedItemId);

    const updatedColumns = {
      ...data.columns,
      [column.id]: { ...column, itemIds: updatedItemIds },
    };

    setData({ ...data, columns: updatedColumns });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-container">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const items = column.itemIds.map((itemId) => data.items[itemId]);

          let color;
          if (column.title === "To Do") {
            color = "text-red-500";
          } else if (column.title === "In Progress") {
            color = "text-yellow-500";
          } else {
            color = "text-green-500";
          }

          return (
            <Droppable key={column.id} droppableId={column.id} direction="vertical">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="column">
                  <div className="column-header">
                    <h3 className={`${color}`}>{column.title}</h3>
                  </div>
                  <div className="column-content">
                    {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item text-[15px]">
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    <div className="flex items-center w-full justify-center hover:bg-gray-100 mt-4 h-[2rem] hover:cursor-pointer group rounded-lg">
                      {/* <FaPlus className="text-gray-500 text-[14px] opacity-40 group-hover:opacity-100" /> */}+
                    </div>
                  </div>
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
