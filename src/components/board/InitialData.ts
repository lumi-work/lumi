import { createClient } from "@/utils/client";

export const fetchInitialData = async () => {

  const supabase = createClient();

  const { data: columnsData, error: columnError } = await supabase
    .from('column')
    .select('*');
  
  if (columnError) {
    console.error('Column verisi çekilemedi:', columnError);
    return;
  }

  const { data: itemsData, error: itemsError } = await supabase
    .from('items')
    .select('*');
  
  if (itemsError) {
    console.error('Items verisi çekilemedi:', itemsError);
    return;
  }

  const items = itemsData.reduce((acc: any, item: any) => {
    acc[item.itemId] = { id: item.itemId, content: item.content };
    return acc;
  }, {});

  const columns = columnsData.reduce((acc: any, column: any) => {
    acc[column.id] = {
      id: column.id,
      title: column.title,
      itemIds: [column.itemId]
    };
    return acc;
  }, {});

  const columnOrder = columnsData.map((column: any) => column.id);

  const initialData = {
    columns,
    items,
    columnOrder
  };

  return initialData;
};
