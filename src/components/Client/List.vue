<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <Menu/>
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
                        <tbody>
                            <tr
                                v-for="user in allUsers"
                                :key="user.id">
                                    <td>{{ user.teachers.profile.name }}</td>
                                    <td>{{ user.teachers.profile.email }}</td>
                                    <td>
                                        <router-link :to="`/admin/users/${user.id}`">View</router-link>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Menu from '@/components/Commom/Menu'
import { CLIENT_LIST_QUERY } from '../../gql/client'

export default {
    name: 'Users',
    components: {
        Menu
    },
    data () {
        return {
            allUsers: {}
        }
    },
    apollo: {
        allUsers: {
            query: CLIENT_LIST_QUERY
        }
    }
}
</script>