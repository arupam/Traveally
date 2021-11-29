import React, { useRef } from "react";
import '../../App.css';
import Sidebar from "../Sidebar";

export default function Dashboard() {
    const accountRef = useRef()
    const tripRef = useRef()
    const blogRef = useRef()
    const reviewRef = useRef()

    return (
        <>
        <Sidebar/>
        <div>
        <div ref={accountRef}>
        <h1>Dashboard</h1>
        <br />
        <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam provident odio ullam explicabo dolorem doloremque consequatur, molestiae sit tempore quos ipsa maxime nihil sequi aspernatur veritatis reiciendis illum dolorum quis! Temporibus autem quibusdam quidem, incidunt deserunt, necessitatibus cupiditate, repellat labore eos mollitia eligendi. Error adipisci temporibus sapiente recusandae quod sit et eveniet laboriosam facere! Libero autem cumque accusamus qui dolores blanditiis perferendis, consectetur nisi ex odio ducimus recusandae delectus maiores a hic eum corporis veritatis atque, asperiores deleniti dicta reprehenderit, ut explicabo totam? Maiores cumque quod, suscipit sunt eaque facilis exercitationem quas optio quam molestias laborum vero, id eos.</h3>
        </div>
        <div ref={tripRef}>
        <h1>Trips</h1>
        <br />
        <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam provident odio ullam explicabo dolorem doloremque consequatur, molestiae sit tempore quos ipsa maxime nihil sequi aspernatur veritatis reiciendis illum dolorum quis! Temporibus autem quibusdam quidem, incidunt deserunt, necessitatibus cupiditate, repellat labore eos mollitia eligendi. Error adipisci temporibus sapiente recusandae quod sit et eveniet laboriosam facere! Libero autem cumque accusamus qui dolores blanditiis perferendis, consectetur nisi ex odio ducimus recusandae delectus maiores a hic eum corporis veritatis atque, asperiores deleniti dicta reprehenderit, ut explicabo totam? Maiores cumque quod, suscipit sunt eaque facilis exercitationem quas optio quam molestias laborum vero, id eos.</h3>
        </div>
        <div ref={blogRef}>
        <h1>Blogs</h1>
        <br />
        <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam provident odio ullam explicabo dolorem doloremque consequatur, molestiae sit tempore quos ipsa maxime nihil sequi aspernatur veritatis reiciendis illum dolorum quis! Temporibus autem quibusdam quidem, incidunt deserunt, necessitatibus cupiditate, repellat labore eos mollitia eligendi. Error adipisci temporibus sapiente recusandae quod sit et eveniet laboriosam facere! Libero autem cumque accusamus qui dolores blanditiis perferendis, consectetur nisi ex odio ducimus recusandae delectus maiores a hic eum corporis veritatis atque, asperiores deleniti dicta reprehenderit, ut explicabo totam? Maiores cumque quod, suscipit sunt eaque facilis exercitationem quas optio quam molestias laborum vero, id eos.</h3>
        </div>
        <div ref={reviewRef}>
        <h1>Reviews</h1>
        <br />
        <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam provident odio ullam explicabo dolorem doloremque consequatur, molestiae sit tempore quos ipsa maxime nihil sequi aspernatur veritatis reiciendis illum dolorum quis! Temporibus autem quibusdam quidem, incidunt deserunt, necessitatibus cupiditate, repellat labore eos mollitia eligendi. Error adipisci temporibus sapiente recusandae quod sit et eveniet laboriosam facere! Libero autem cumque accusamus qui dolores blanditiis perferendis, consectetur nisi ex odio ducimus recusandae delectus maiores a hic eum corporis veritatis atque, asperiores deleniti dicta reprehenderit, ut explicabo totam? Maiores cumque quod, suscipit sunt eaque facilis exercitationem quas optio quam molestias laborum vero, id eos.</h3>
        </div>
        </div>
        </>
    )
}