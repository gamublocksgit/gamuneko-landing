const appStoreUrl = 'https://apps.apple.com/us/app/gamu-neko-pomodoro-timer/id6759168102';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.gamublocks.gamuneko';

export function StoreButtons() {
  return (
    <div className="store-buttons" aria-label="Download Gamu Neko">
      <a href={playStoreUrl} rel="noreferrer" aria-label="Download Gamu Neko on Google Play">
        <img src="./assets/PlayStoreBadge.png" alt="Get it on Google Play" />
      </a>
      <a href={appStoreUrl} rel="noreferrer" aria-label="Download Gamu Neko on the App Store">
        <img src="./assets/AppStoreBadge.svg" alt="Download on the App Store" />
      </a>
    </div>
  );
}
