<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Earthquake Finder Sample Capsule</h1>
</p>

## Overview
This capsule allows users to search for earthquakes around the globe based on various search criteria such as geographic location, date-time, minimum magnitude, event type, among others. This is designed to supplement the blog on Bixby conversations which describes the features of Bixby’s conversational interaction model.

## How to get started
* Download and install the Bixby Studio IDE from the Bixby Developer Center.
* Download this capsule (zip is the easiest way) from GitHub. Unzip in your directory of choice.
* Open the Capsule in Bixby Developer Studio.
* Open the simulator and give it a try!

## How to try
```
find earthquakes within 50 miles of me
search for quarry blasts and mining explosions
find earthquakes in los angeles that happened last week
```

## How to customize
* This capsule and the companion blog describes the features of Bixby’s conversational interaction model, including:
  1. Value prompts for required inputs or selection prompts for disambiguation of multiple inputs
  2. Default initialization to prevent unnecessary user prompting for required inputs
  3. Replacement functionality for single cardinal inputs
  4. Handling of multi-cardinal inputs in either JavaScript or modeling using iterable
  5. Relaxation to remove search constraints when an empty list of results is returned by either dropping inputs or replacing inputs with less-restrictive ones
* Change the capsule id to reflect your organization and your content. The capsule id is defined in the `capsule.bxb` file.

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) - Bixby News, Tutorials, Blogs and Events

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
