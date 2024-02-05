import { useScheduler } from "#scheduler";

export default defineNitroPlugin(() => {
  startScheduler();
});

function startScheduler() {
  const scheduler = useScheduler();

  scheduler
    .run(() => {
      console.log("This will run every second");
    })
    .everySecond();

  scheduler
    .run(() => {
      console.log("This will run 5 second");
    })
    .everySeconds(5);

  // create as many tasks as you want here
}
