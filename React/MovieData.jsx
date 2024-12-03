import ItemMovie from "./ItemMovie";

export default function MovieData({ mData }) {
  let count = 0;
  let arr = [1,2,3,4,5,6]

  return mData.map((Mobj) => (
       <ItemMovie key="" Item={Mobj}></ItemMovie>
  ));
}
