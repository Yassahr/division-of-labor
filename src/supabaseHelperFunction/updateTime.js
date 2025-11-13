//functions updating the user's logged time
import supabase  from "../supabaseClient";
const mockNewChore={
    //this would be coming from Chore Input Form
    name: "partner_one",
    startedAt:1763071371730, //timestamp in milliseconds
    endedAt: 1763071371740, //timestamp in millisecond
}

//rough draft of update function
async function updateChore(newChore){
    const {  data: userData, error: userError } = await supabase
    .from('users')
    .select('id')
    .eq('name', newChore.name)

if (userError || !userData) {
    console.error('User not found');
    return;
 }

const startedAt = newChore.startedAt;
const endedAt = newChore.endedAt;
const durationSeconds = Math.floor(endedAt - startedAt);

const { data: sessionData, error: sessionError } = await supabase
  .from('chore_session')
  .insert({
    id: userData.id,
    started_at: startedAt,
    ended_at: endedAt,
    duration_seconds: durationSeconds
  })
  .select();
  if (sessionError || !sessionData) {
    console.error('session not updated');
    return;
 }else{
  console.log('Update was successful')
 }

}
export default updateChore;