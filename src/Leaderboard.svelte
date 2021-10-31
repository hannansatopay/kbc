<script>
import { db } from './firebase.js';
import { collection, query, getDocs, onSnapshot, orderBy, limit } from "firebase/firestore";

let leaderboard = [];

const q = query(collection(db, "Leaderboard"), orderBy("score", "desc"));

// Code: Realtime Updates
// onSnapshot(q, (querySnapshot) => {
//   leaderboard = [];
//   querySnapshot.forEach((doc) => {
//     doc = doc.data();
//     leaderboard.push({'name': doc["name"], 'score': doc["score"]});
//   });
//   leaderboard = leaderboard;
// });

async function fetchLeaderboard() {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    doc = doc.data();
    leaderboard.push({'name': doc["name"], 'score': doc["score"]});
  });
  leaderboard = leaderboard;
}
fetchLeaderboard();
</script>

<main>
    <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {#each leaderboard as { name, score }}
            <tr>
              <td>{name}</td>
              <td>{score}</td>
            </tr>
          {/each}
        </tbody>
    </table>
</main>

<style>
</style>