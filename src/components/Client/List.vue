<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu />
        </div>
        <div class="column is-9">
          <h2 class="title">Users</h2>

          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="teachers.length !== 0">
              <tr v-for="client in teachers[0].clients" :key="client.id">
                <td>{{ client.profile.name }}</td>
                <td>{{ client.profile.email }}</td>
                <td>
                  <router-link :to="`/admin/users/${client.id}`">View</router-link>
                </td>
              </tr>
            </tbody>
            <tbody v-else>Estamos carregando seus clientes</tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Menu from "@/components/Commom/Menu";
import { CLIENT_LIST_QUERY } from "../../gql/client";

export default {
  name: "Users",
  components: {
    Menu
  },
  data() {
    return {
      teachers: []
    };
  },
  apollo: {
    teachers: {
      query: CLIENT_LIST_QUERY
    }
  },
  methods: {
    console: teachers => console.log(teachers)
  }
};
</script>