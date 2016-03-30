Version 2 of formBuilder improves on multilingual support through proper language files that can be loaded automatically depending on user's locale. The format of these files is also plain text, making it easier for translations to be added without the need to escape special characters. In this wiki we'll look at this file and describe how you can contribute to a language to the project.

---

### Language File
As mentioned its a basic text file and a sample of `en-US` looks like this:
```
cannotBeEmpty = This field cannot be empty
checkboxGroup = Checkbox Group
checkbox = Checkbox
checkboxes = Checkboxes
```
The new language module included in formBuilder2 will handle all the escaping which should reduce margin of error when it comes to encoding special characters for JSON or other formats.

### Contributing
If you'd like to contribute a translation please submit your pull-request to the [`languages`](https://github.com/kevinchappell/formBuilder/tree/languages) branch of the project. Language filenames should follow the standard of `[language[-TERRITORY]]` using abbreviations or simply put `en-US` for US English.

### Thank you
Your contribution is very much appreciated and with everyone's help formBuilder 2.0 will ship with support for many languages.
