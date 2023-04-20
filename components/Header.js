import Link from 'next/link';

export default function Header() {
    return (
        <div>               
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NextJs Project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link legacyBehavior href="/">
          <a class="nav-link active" aria-current="page">Home</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link legacyBehavior href="/about">
            <a class="nav-link">About</a>
            </Link>
          </li>
        <li class="nav-item">
            <Link legacyBehavior href="/contact">
            <a class="nav-link">Contact</a>
            </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}