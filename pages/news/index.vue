<template>
  <div>
      <h2>News Index page</h2>
      NewsID:{{$route.params.newsId}}
       <ul>
        <nuxt-link :to="{name:'index'}">HOME</nuxt-link>
        <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'jspang.com'}}">News-1</nuxt-link></li>
        <li><a href="/news/aaa">News-2</a></li>
      </ul>
  </div>
</template>