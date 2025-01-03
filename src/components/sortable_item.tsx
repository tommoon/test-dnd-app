import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item({id, children}) {

  const style = {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "1px solid black",
    margin: "10px 0px",
    background: "white"
  };

  return <div style={style}>{id}{children}</div>;
}

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Item id={props.id}>
      <button {...listeners} {...attributes}>Drag</button>
      </Item>
    </div>
  );
}
